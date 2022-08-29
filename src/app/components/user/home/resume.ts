import * as converter from 'number-to-words';


export class Resume {
    profilePic: string;
    
    address: string='';
    contactNo: number=0;
    email: string='';
    socialProfile: string='';
   
    // experiences: Experience[] = [];
    // educations: Education[] = [];
    // otherDetails: string;
    // skills: Skill[] = [];
     name: string='';
    id: number=0;
    recieptDate: Date;
    className: string='';
    section: string='';
    rollNo: number=0;
    tuitionFee: number=0;
    admissionFee:number=0;
    transportFee:number=0;
    examinationFee:number=0;
    miscellaneousFee:number=0;
    prantiyaNidhi:number=0;
    compititionFee:number=0;
    registrationFee:number=0;
    libarayFee:number=0;
    otherFee:number=0;
    receivedByDetail:string='';
    transactionId:number=0;
    paymentReceivedDate:Date;
    bankName:string='';
    amountWord:string='';
    totalAmount:number=0;

    
    adFromMonth: string='';
    adToMonth: string='';
    tsFromMonth: string='';
    tsToMonth: string='';


    constructor() {
       
        this.recieptDate=new Date();
        this.paymentReceivedDate=new Date();
        this.totalAmount = this.getTotal();
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
      getAddmissionFromMonth(value){
        this.adFromMonth= value;
      }
      getAddmissionToMonth(value){
        this.adToMonth= value;
      }

      getTransmissionFromMonth(value){
        this.tsFromMonth= value;
      }
      getTransmissionToMonth(value){
        this.tsToMonth= value;
      }
    }

// export class Experience {
//     employer: string;
//     jobTitle: string;
//     jobDescription: string;
//     startDate: string;
//     experience: number;
// }

// export class Education {
//     degree: string;
//     college: string;
//     passingYear: string;
//     percentage: number;
// }

// export class Skill {
//     value: string;
// }
