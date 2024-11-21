const speakeasy = require("speakeasy");

const secret = speakeasy.generateSecret({ name: "MyApp" });
console.log("Secret Key:", secret.base32);


const QRCode = require("qrcode");

const secret = speakeasy.generateSecret({ name: "MyApp" });
QRCode.toDataURL(secret.otpauth_url, (err, data_url) => {
    if (err) throw err;
    console.log("QR Code URL:", data_url);
});


const verified = speakeasy.totp.verify({
    secret: secret.base32,
    encoding: "base32",
    token: userProvidedToken, // Input from user
});

if (verified) {
    console.log("Token is valid!");
} else {
    console.log("Invalid token!");
}
