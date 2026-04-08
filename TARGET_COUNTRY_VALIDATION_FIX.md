# Target Country Validation Fix

## 🐛 Problem

**Issue:** User sudah memilih negara target (contoh: "Bhutan"), tapi saat klik "Ajukan Resolusi Ke PBB" muncul error:

```
Target negara harus dipilih untuk sanksi/embargo
```

## 🔍 Root Cause Analysis

### Issue 1: Wrong Property Name

**Country Object Structure:**
```typescript
{
  name_id: "Bhutan",  // ✅ Correct property
  flag: "🇧🇹",
  // ... other properties
}
```

**Code was using:**
```typescript
targetCountry: selectedCountry?.name  // ❌ Wrong! Property doesn't exist
```

**Should be:**
```typescript
targetCountry: selectedCountry?.name_id  // ✅ Correct!
```

### Issue 2: Validation Logic

**Original validation:**
```typescript
if ((params.type === 'sanction' || params.type === 'embargo') && !params.targetCountry) {
  return 'Target negara harus dipilih untuk sanksi/embargo';
}
```

**Problem:** 
- `!params.targetCountry` only checks for `null` or `undefined`
- Doesn't check for empty string `""`
- If `selectedCountry?.name` returns `undefined`, it becomes `undefined` in params
- Validation fails even though user selected a country

## ✅ Solution

### Fix 1: Use Correct Property Name

**In ProposalSubmissionHandler.tsx:**

```typescript
// ❌ BEFORE
const params = {
  targetCountry: selectedCountry?.name,  // Wrong property
  // ...
};

// ✅ AFTER
const params = {
  targetCountry: selectedCountry?.name_id || selectedCountry?.name || undefined,
  // Tries name_id first (correct), then name (fallback), then undefined
  // ...
};
```

### Fix 2: Improve Validation

**In useProposalSubmission.ts:**

```typescript
// ❌ BEFORE
if ((params.type === 'sanction' || params.type === 'embargo') && !params.targetCountry) {
  return 'Target negara harus dipilih untuk sanksi/embargo';
}

// ✅ AFTER
if ((params.type === 'sanction' || params.type === 'embargo') && 
    (!params.targetCountry || params.targetCountry.trim() === '')) {
  return 'Target negara harus dipilih untuk sanksi/embargo';
}
```

**Improvements:**
- ✅ Checks for `null` or `undefined`
- ✅ Checks for empty string `""`
- ✅ Checks for whitespace-only string `"   "`

### Fix 3: Enhanced Logging

**Added detailed console logs:**

```typescript
console.log('selectedCountry:', selectedCountry);
console.log('selectedCountry?.name_id:', selectedCountry?.name_id);
console.log('selectedCountry?.name:', selectedCountry?.name);
console.log('params.targetCountry:', params.targetCountry);
console.log('typeof params.targetCountry:', typeof params.targetCountry);
```

**Purpose:**
- Debug what value is actually being passed
- Identify property name issues
- Verify data type

## 📊 Data Flow

### Before Fix (Broken):

```
User selects "Bhutan"
    ↓
selectedCountry = {name_id: "Bhutan", flag: "🇧🇹"}
    ↓
targetCountry: selectedCountry?.name  // ← undefined (property doesn't exist)
    ↓
params.targetCountry = undefined
    ↓
Validation: !params.targetCountry  // ← true (fails validation)
    ↓
❌ Error: "Target negara harus dipilih untuk sanksi/embargo"
```

### After Fix (Working):

```
User selects "Bhutan"
    ↓
selectedCountry = {name_id: "Bhutan", flag: "🇧🇹"}
    ↓
targetCountry: selectedCountry?.name_id  // ← "Bhutan" ✅
    ↓
params.targetCountry = "Bhutan"
    ↓
Validation: !params.targetCountry || params.targetCountry.trim() === ''
    ↓
false (passes validation) ✅
    ↓
✅ Submission successful!
```

## 🧪 Testing

### Test Case 1: Sanksi dengan Target

**Steps:**
1. Select "Sanksi Ekonomi"
2. Select target country "Bhutan"
3. Select duration "6 Bulan"
4. Click "Ajukan Resolusi Ke PBB"

**Expected Console Output:**
```
=== SUBMIT CLICKED ===
selectedCountry: {name_id: "Bhutan", flag: "🇧🇹", ...}
selectedCountry?.name_id: "Bhutan"
selectedCountry?.name: undefined
proposalType: "sanction"
params: {type: "sanction", targetCountry: "Bhutan", ...}
params.targetCountry: "Bhutan"
typeof params.targetCountry: "string"
validationError: null
Starting submission...
```

**Result:**
- ✅ No validation error
- ✅ Modal appears
- ✅ Target country shown as "Bhutan"

### Test Case 2: Embargo dengan Target

**Steps:**
1. Select "Embargo Penjualan Teknologi"
2. Select target country "China"
3. Select duration "1 Tahun"
4. Click "Ajukan Resolusi Ke PBB"

**Expected:**
- ✅ Validation passes
- ✅ Modal shows target "China"
- ✅ Sub-item "Semikonduktor" included

### Test Case 3: Resolution tanpa Target

**Steps:**
1. Select "Larangan Perang (Anti-War)"
2. Select duration "1 Tahun"
3. Click "Ajukan Resolusi Ke PBB"

**Expected:**
- ✅ No target required
- ✅ Validation passes
- ✅ Modal shows no target

## 🔍 Debugging Guide

### If validation still fails:

**Step 1: Check Console Logs**

Look for:
```javascript
selectedCountry: {...}  // Should not be null/undefined
selectedCountry?.name_id: "..."  // Should have value
params.targetCountry: "..."  // Should have value
validationError: null  // Should be null
```

**Step 2: Check Country Object Structure**

```javascript
// In browser console
console.log('Selected Country:', selectedCountry);
console.log('Keys:', Object.keys(selectedCountry));
```

Expected output:
```
Selected Country: {name_id: "Bhutan", flag: "🇧🇹", ...}
Keys: ["name_id", "flag", ...]
```

**Step 3: Verify Property Access**

```javascript
console.log('name_id:', selectedCountry?.name_id);  // Should have value
console.log('name:', selectedCountry?.name);        // Might be undefined
```

### Common Issues:

**Issue:** `selectedCountry` is `null`
**Solution:** User hasn't selected a country yet

**Issue:** `selectedCountry?.name_id` is `undefined`
**Solution:** Country object structure changed, check actual property names

**Issue:** `params.targetCountry` is empty string `""`
**Solution:** Enhanced validation now catches this

## 📝 Files Modified

### 1. ProposalSubmissionHandler.tsx

**Changes:**
- ✅ Use `selectedCountry?.name_id` instead of `selectedCountry?.name`
- ✅ Add fallback: `name_id || name || undefined`
- ✅ Add detailed console logs

**Lines changed:** ~70-85

### 2. useProposalSubmission.ts

**Changes:**
- ✅ Enhanced validation to check for empty strings
- ✅ Check `trim()` to catch whitespace-only strings

**Lines changed:** ~182-184

## 🎯 Validation Rules

### For Resolutions:
- ✅ Target country: **Optional**
- ✅ Can submit without selecting target

### For Sanctions:
- ✅ Target country: **Required**
- ✅ Must be non-empty string
- ✅ Must not be whitespace-only

### For Embargoes:
- ✅ Target country: **Required**
- ✅ Sub-item: **Required**
- ✅ Both must be non-empty strings

## ✅ Verification Checklist

After fix, verify:

- [ ] Console shows `selectedCountry?.name_id` with value
- [ ] Console shows `params.targetCountry` with value
- [ ] Console shows `validationError: null`
- [ ] No alert popup for validation error
- [ ] Modal appears after submission
- [ ] Modal shows correct target country
- [ ] Data saved to localStorage with target

## 🎉 Result

**Before:**
- ❌ User selects country
- ❌ Validation fails
- ❌ Error message appears
- ❌ Modal doesn't show

**After:**
- ✅ User selects country
- ✅ Validation passes
- ✅ No error message
- ✅ Modal appears with target country

## 📚 Related Issues

### Similar Property Name Issues:

If you encounter similar issues with other properties:

1. **Check actual object structure:**
   ```javascript
   console.log('Object:', yourObject);
   console.log('Keys:', Object.keys(yourObject));
   ```

2. **Use optional chaining with fallbacks:**
   ```typescript
   value: object?.property1 || object?.property2 || defaultValue
   ```

3. **Add validation for empty strings:**
   ```typescript
   if (!value || value.trim() === '') {
     // Handle empty value
   }
   ```

## 🔧 Future Improvements

### Type Safety:

Define proper TypeScript interface:

```typescript
interface CountryData {
  name_id: string;
  flag: string;
  continent?: string;
  // ... other properties
}

interface ProposalSubmissionHandlerProps {
  selectedCountry: CountryData | null;
  // ... other props
}
```

### Better Error Messages:

```typescript
if (!params.targetCountry) {
  return `Target negara harus dipilih untuk ${params.type}. Silakan pilih negara dari daftar.`;
}
```

### Visual Feedback:

Add red border to country selector if validation fails:

```typescript
<div className={`border ${validationError ? 'border-red-500' : 'border-zinc-800'}`}>
  {/* Country selector */}
</div>
```

---

**Status:** ✅ FIXED
**Date:** 2024
**Impact:** Validation sekarang bekerja dengan benar untuk sanksi dan embargo!
