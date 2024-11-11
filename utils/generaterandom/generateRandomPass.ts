export class GenerateRandomPassword {
    static generatePass(length = 8): string {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    // generate OTP
    static generateOTP(length = 4): string {
        const charset = "0123456789";
        let retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
}