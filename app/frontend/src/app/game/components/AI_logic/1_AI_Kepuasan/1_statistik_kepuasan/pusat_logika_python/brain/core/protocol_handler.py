from .constants import CRITICAL_THRESHOLD

def handle_protocols(current_value, economy_delta, tax_delta, security_delta, housing_penalty):
    """Determines emergency protocols and actions."""
    emergency_protocol = "NONE"
    emergency_actions = []

    if current_value < CRITICAL_THRESHOLD:
        emergency_protocol = "CRITICAL_INSTABILITY"
        if economy_delta < -0.2:
            emergency_actions.append("REQUEST_IMF_BAILOUT")
        if tax_delta < -0.1:
            emergency_actions.append("TAX_HOLIDAY_30D")
        if security_delta < 0:
            emergency_actions.append("MARTIAL_LAW_DECLARATION")
        if housing_penalty < -0.5:
            emergency_actions.append("EMERGENCY_SQUATTER_LEGALIZATION")
        
        if current_value < 10:
            emergency_protocol = "GOVERNMENT_COLLAPSE_RISK"
            emergency_actions.append("EMERGENCY_ELECTIONS")

    return emergency_protocol, emergency_actions
