import * as converter from 'number-to-words';


export class Resume {
    profilePic: string;
    
    address: string;
    contactNo: number;
    email: string;
    socialProfile: string;
    experiences: Experience[] = [];
    educations: Education[] = [];
    otherDetails: string;
    skills: Skill[] = [];
    name: string;
    receiptNo: number;
    recieptDate: Date;
    className: string;
    section: string;
    rollNo: number;
    tuitionFee: number;
    admissionFee:number;
    transportFee:number;
    examinationFee:number;
    miscellaneousFee:number;
    prantiyaNidhi:number;
    compititionFee:number;
    registrationFee:number;
    libarayFee:number;
    otherFee:number;
    receivedByDetail:string;
    transactionId:number;
    paymentReceivedDate:Date;
    bankName:string;
    amountWord:string;
    totalAmount:number;
   


    constructor() {
        this.experiences.push(new Experience());
        this.educations.push(new Education());
        this.skills.push(new Skill());
        this.recieptDate=new Date();
        this.paymentReceivedDate=new Date();
        //this.totalAmount = this.getTotal();
    }
    getTotal():number {
        return Number(this.admissionFee )+Number(this.tuitionFee)+Number(this.transportFee)
        +Number(this.examinationFee)+Number(this.miscellaneousFee)+Number(this.prantiyaNidhi)
        +Number(this.compititionFee)+Number(this.registrationFee)+Number(this.libarayFee)+Number(this.otherFee);
    }
    convertToWord(){
        this.amountWord=converter.toWords(this.getTotal());
        return this.amountWord;
    
      }


}

export class Experience {
    employer: string;
    jobTitle: string;
    jobDescription: string;
    startDate: string;
    experience: number;
}

export class Education {
    degree: string;
    college: string;
    passingYear: string;
    percentage: number;
}

export class Skill {
    value: string;
}
