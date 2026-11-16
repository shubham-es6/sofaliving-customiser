export function validateEnquiry(v) {
  const e = {};
  const name = (v.name || "").trim();
  const phone = (v.phone || "").trim();
  const email = (v.email || "").trim();
  const city = (v.city || "").trim();

  if (!name) e.name = "Enter your full name.";
  else if (name.length < 2) e.name = "Name must be at least 2 characters.";

  if (!phone) e.phone = "Enter your phone number.";
  else if (!/^[6-9]\d{9}$/.test(phone))
    e.phone = "Enter a valid 10-digit Indian mobile number.";

  if (!email) e.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    e.email = "Enter a valid email, like name@example.com.";

  if (!city) e.city = "Enter your city and pincode.";
  else if (!/\d{6}/.test(city)) e.city = "Include a 6-digit pincode, like 560038.";

  return e;
}