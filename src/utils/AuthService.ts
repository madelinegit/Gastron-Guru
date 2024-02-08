import { jwtDecode } from "jwt-decode";

interface IToken {
    iss: string;
    sub: string;
    aud: string;
    exp: number;
    iat: number;
    name: string;
    given_name: string;
    family_name: string;
    gender: string;
    birthdate: string;
    email: string;
    picture: string;
}

class AuthService {
    tokenKey = "id_token";
    getToken(): string {
        const token = localStorage.getItem(this.tokenKey);
        if (!token) {
            throw new Error("No token found");
        }
        return token;
    }
    setToken(idToken: string) {
        if (!idToken) {
            throw new Error("No idToken provided");
        }
        localStorage.setItem(this.tokenKey, idToken);
    }
    removeToken() {
        localStorage.removeItem(this.tokenKey);
    }
    decodeToken(): IToken {
        try {
            return jwtDecode(this.getToken());
        } catch (error) {
            throw new Error("Failed to decode token");
        }
    }
    isTokenExpired(): boolean {
        const { exp } = this.decodeToken();
        if (!exp) {
            throw new Error("No expiration time found in token");
        }
        return exp < Date.now() / 1000;
    }
    isLoggedIn(): boolean {
        try {
            if (!this.isTokenExpired()) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    login(idToken: string) {
        this.setToken(idToken);
    }
    logout() {
        this.removeToken();
        window.location.reload();
    }
}

export default new AuthService();