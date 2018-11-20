import { AbstractControl } from "@angular/forms";

export class CustomValidator {

    static passwordMatch(form: AbstractControl){
        const password = form.get('password').value;
        const confirmPassword = form.get('confirmPassword').value;
        if (password !== confirmPassword) {
            return { passwordMatch: { password, confirmPassword }};
        } else {
            return null;
        }
    }
    
}