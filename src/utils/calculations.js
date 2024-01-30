/**
 * Handle the user password strength
 */
export const calculatePasswordStrength = (passwrd) => {
  let strength = 0;

  if (passwrd.length === 0) {
    return 0;
  }
  if (passwrd.length !== 0 && passwrd.length > 8) {
    strength += 14.29;
  }
  if (passwrd.length >= 8) {
    strength += 14.29;
  }
  if (/[A-Z]/.test(passwrd)) {
    strength += 14.29;
  }
  if (/[a-z]/.test(passwrd)) {
    strength += 14.29;
  }
  if (/[0-9]/.test(passwrd)) {
    strength += 14.29;
  }
  if (/[!@#$%^&*]/.test(passwrd)) {
    strength += 14.29;
  }
  if (!/\s/.test(passwrd)) {
    strength += 14.29;
  }

  return strength / 100;
};

/**
 * Handle password strength message inside the span
 */
export const passwordStrengthSpanMessage = (passwrd_strength) => {
  if (passwrd_strength === 0) {
    return { text_color: "#B1B0B0", bg_color: "transparent", msg: "strength" };
  } else if (passwrd_strength > 0 && passwrd_strength <= 0.25) {
    return { text_color: "#f52f2f", bg_color: "#f52f2f", msg: "Weak!" };
  } else if (passwrd_strength > 0.25 && passwrd_strength <= 0.5) {
    return { text_color: "#f5602f", bg_color: "#f5602f", msg: "Weak" };
  } else if (passwrd_strength > 0.5 && passwrd_strength <= 0.8) {
    return { text_color: "#f0cd32", bg_color: "#f0cd32", msg: "Strong" };
  } else if (passwrd_strength > 0.8) {
    return { text_color: "#75f23f", bg_color: "#75f23f", msg: "Very strong!" };
  } else {
    return "Unknown";
  }
};
