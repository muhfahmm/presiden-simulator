import random

class RegionalMembershipNewsGenerator:
    """
    Generates realistic news strings for regional membership movements.
    """
    
    def generate_join_news(self, country_name, org_name):
        templates = [
            f"{country_name} resmi bergabung dengan {org_name} untuk memperkuat stabilitas wilayah.",
            f"Integrasi Regional: {country_name} kini menjadi anggota baru {org_name}.",
            f"Setelah proses negosiasi, {country_name} secara resmi masuk ke dalam aliansi {org_name}.",
            f"{org_name} menyambut hangat {country_name} sebagai anggota baru dalam blok tersebut."
        ]
        return random.choice(templates)

    def generate_leave_news(self, country_name, org_name):
        templates = [
            f"Kejutan Geopolitik: {country_name} memutuskan untuk keluar dari {org_name}.",
            f"{country_name} resmi mengundurkan diri dari keanggotaan {org_name}.",
            f"Pergeseran Strategi: {country_name} tidak lagi menjadi bagian dari blok {org_name}.",
            f"Hubungan Retak: {country_name} meninggalkan {org_name} setelah perbedaan visi diplomatik."
        ]
        return random.choice(templates)

    def format_news_item(self, country_name, org_name, action, current_date):
        content = self.generate_join_news(country_name, org_name) if action == "join" else self.generate_leave_news(country_name, org_name)
        subject = f"Update Keanggotaan {org_name}: {country_name}"
        
        return {
            "source": f"Sekretariat {org_name}",
            "subject": subject,
            "content": content,
            "category": "organizations",
            "priority": "medium",
            "time": current_date
        }
