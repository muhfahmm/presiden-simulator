import { UnitState } from "./polyglot/ts/polyglot-router";
import { countries } from "@/app/database/data/negara/benua/index";
import { calculateUdaraFormation } from "./formasi_armada/udara/grid_formation";
import { calculateLautFormation } from "./formasi_armada/laut/grid_formation";
import { calculateDaratFormation } from "./formasi_armada/darat/grid_formation";
import { BarakUtils, BarrackState } from "./mapTexture/gambar-tempat-armada/darat/barak/BarakUtils";
import { HangarUtils, HangarState } from "./mapTexture/gambar-tempat-armada/darat/hangar_tank/HangarUtils";
import { AirfieldUtils, AirfieldHangarState, HelipadState } from "./mapTexture/gambar-tempat-armada/udara/AirfieldUtils";
import { PortShipState } from "./mapTexture/gambar-tempat-armada/laut/pelabuhan/logika_kapal_keluar_pelabuhan/logic";
import { ArmoryUtils, ArmoryState } from "./mapTexture/gambar-tempat-armada/darat/gudang_senjata/ArmoryUtils";

/**
 * Theater Setup Logic - Initial Battlefield Configuration
 */
export class TheaterSetupLogic {
    static readonly SEA_THRESHOLD = -6000;
    static readonly NAVAL_UNITS = ["kapal_induk", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"];
    static readonly AIR_UNITS = ["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"];

    /**
     * Initializes the entire theater of war based on the target country.
     */
    static initializeTheater(targetName: string): {
        targetCountry: any;
        initialUnits: UnitState[];
        barracks: BarrackState[];
        tankHangars: HangarState[];
        airfieldHangars: AirfieldHangarState[];
        helipads: HelipadState[];
        portShips: PortShipState[];
        armory: ArmoryState[];
    } {
        const targetCountry = countries.find(c =>
            c.name_id.toLowerCase() === targetName.toLowerCase() ||
            c.name_en.toLowerCase() === targetName.toLowerCase()
        );

        if (!targetCountry) {
            throw new Error(`Target country ${targetName} not found.`);
        }

        const armada = targetCountry.armada_militer;
        let cumulativeUnits: UnitState[] = [];
        let currentY = -12000;
        const groupGapY = 800;

        // 1. LAUT
        const lautRes = calculateLautFormation(armada.laut, currentY);
        cumulativeUnits = [...cumulativeUnits, ...lautRes.units];
        currentY = Math.max(lautRes.nextY, -5000) + groupGapY;

        // 2. UDARA
        const airArmada = { ...armada.udara };
        this.AIR_UNITS.forEach(type => delete (airArmada as any)[type]);
        const udaraRes = calculateUdaraFormation(airArmada, currentY);
        cumulativeUnits = [...cumulativeUnits, ...udaraRes.units];
        currentY = udaraRes.nextY + groupGapY;

        // 3. DARAT (field units: artileri, roket, SAM — NOT tanks, APC, tactical, infantry)
        const fieldUnits = { ...armada.darat };
        delete (fieldUnits as any).tank_tempur_utama;
        delete (fieldUnits as any).pasukan_infanteri;
        delete (fieldUnits as any).apc_ifv;
        delete (fieldUnits as any).kendaraan_taktis;
        delete (fieldUnits as any).artileri_berat;
        delete (fieldUnits as any).sistem_peluncur_roket;
        delete (fieldUnits as any).pertahanan_udara_mobile;
        const daratRes = calculateDaratFormation(fieldUnits, armada.barak, currentY);
        cumulativeUnits = [...cumulativeUnits, ...daratRes.units];

        // 4. STRATEGIC BUILDINGS
        const barracks = armada.barak > 0 ? BarakUtils.calculateBarracksPositions(12000, 850, armada.barak, 10) : [];
        
        // Multi-category hangars: Tank, APC/IFV, Kendaraan Taktis (all in same compound)
        const tankHangars = HangarUtils.calculateMultiCategoryHangars(10400, 4500, armada, 10);

        const airfieldHangars = AirfieldUtils.calculateAirfieldHangars(12000, -2350, armada);
        
        // Helipads: Dynamic count. 1 helipad = max 10 helicopters.
        // e.g. 31 helis → ceil(31/10) = 4 pads (10,10,10,1)
        const totalHelis = armada.udara?.helikopter_serang || 0;
        const helipadCount = totalHelis > 0 ? Math.ceil(totalHelis / 10) : 0;
        const helipads = helipadCount > 0 ? AirfieldUtils.calculateHelipadPositions(12000, -550, helipadCount, totalHelis) : [];

        const portShips: PortShipState[] = armada.laut ? Object.entries(armada.laut).map(([type, count]) => ({
            type,
            currentCount: count as number,
            maxCapacity: count as number
        })) : [];

        // Gudang Senjata: Artileri, MLRS, SAM
        const armory = ArmoryUtils.calculateArmoryPositions(10400, 8500, armada, 8);

        // Final filtering to move base-dependent units inside
        const filteredUnits = cumulativeUnits.filter(u => {
            const isNaval = this.NAVAL_UNITS.includes(u.type);
            const isAir = this.AIR_UNITS.includes(u.type);
            return !isNaval && !isAir;
        });

        return {
            targetCountry,
            initialUnits: filteredUnits,
            barracks,
            tankHangars,
            airfieldHangars,
            helipads,
            portShips,
            armory
        };
    }

    /**
     * Initializes the user's theater (base and buildings) on the left side (X < 0).
     */
    static initializeUserTheater(selection: Record<string, number>): {
        barracks: BarrackState[];
        tankHangars: HangarState[];
        airfieldHangars: AirfieldHangarState[];
        helipads: HelipadState[];
        portShips: PortShipState[];
        armory: ArmoryState[];
    } {
        // Mocking an armada object for user from selection
        const userArmada: any = {
            barak: Math.ceil((selection['pasukan_infanteri'] || 0) / 10000),
            darat: { ...selection },
            udara: { ...selection },
            laut: { ...selection }
        };

        const barracks = userArmada.barak > 0 ? BarakUtils.calculateBarracksPositions(-12000, 850, userArmada.barak, 10) : [];
        const tankHangars = HangarUtils.calculateMultiCategoryHangars(-10400, 4500, userArmada, 10);
        const airfieldHangars = AirfieldUtils.calculateAirfieldHangars(-12000, -2350, userArmada);
        
        const totalHelis = selection['helikopter_serang'] || 0;
        const helipadCount = totalHelis > 0 ? Math.ceil(totalHelis / 10) : 0;
        const helipads = helipadCount > 0 ? AirfieldUtils.calculateHelipadPositions(-12000, -550, helipadCount, totalHelis) : [];

        const portShips: PortShipState[] = userArmada.laut ? Object.entries(userArmada.laut)
            .filter(([type]) => this.NAVAL_UNITS.includes(type))
            .map(([type, count]) => ({
                type,
                currentCount: count as number,
                maxCapacity: count as number
            })) : [];

        const armory = ArmoryUtils.calculateArmoryPositions(-10400, 8500, userArmada, 8);

        return {
            barracks,
            tankHangars,
            airfieldHangars,
            helipads,
            portShips,
            armory
        };
    }
}
