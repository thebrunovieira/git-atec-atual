import { AccessPermission, UserModel } from '../models/user.model';

export class User {

    private id: number;
    private cpf: string;
    private password: string;
    
    private name: string;
    private email: string;

    private sector: string;
    private ocuppation: string;
    private permission: AccessPermission;

    private birthday: [number, number, number];

    private imageProfile: undefined | 1 | 2 | 3 | 4 | 5 | 6;

    constructor(user: UserModel) {
        this.id = user.id;
        this.cpf = user.cpf;
        this.password = user.password;
        this.name = user.data.name;
        this.email = user.data.email;
        this.sector = user.data.sector;
        this.ocuppation = user.data.ocuppation;
        this.permission = user.data.permission;
        this.birthday = user.data.birthday;
        this.imageProfile = user.data.imageProfile;
    }

    private getName() { return this.name; }
    private getEmail() { return this.email; }
    private getSector() { return this.sector; }
    private getOcuppation() { return this.ocuppation; }
    private getBirthday() { return this.birthday; }

    get(data: 'name' | 'email' | 'sector' | 'ocuppation' | 'birthday') {
        switch(data) {
            case 'name': return this.getName();
            case 'email': return this.getEmail();
            case 'sector': return this.getSector();
            case 'ocuppation': return this.getOcuppation();
            case 'birthday': return this.getBirthday();
        }
    }
    
    getImageProfile() { return this.imageProfile; }
    setImageProfile( imageProfile?: 1 | 2 | 3 | 4 | 5 | 6 ) {
        this.imageProfile = imageProfile;
    }

    getID() { return this.id; }

    verify(cpf: string, password: string) {
        if (cpf == this.cpf && password == this.password) return true;
        return false;
    }
}
