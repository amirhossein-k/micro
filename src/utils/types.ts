/* eslint-disable @typescript-eslint/no-explicit-any */
export interface USERTYPE {
    id        :string
    email     :string
    password : string |null
    name     :string|null
    posts   :  POSTTYPE[]
    createdAt :Date
    isVerfied: boolean;
    listordershop: string[];
    address: ADRESS[];
    admin:   boolean

  }
 export interface PHOTO {
    id:string
    defaultImage:boolean
    childImage:string
    fileKey:string |null
    ownerId:string | null
    
  
  }

// رابط جدید برای خروجی با تاریخ‌های فرمت‌شده
export interface FormattedPostType extends Omit<POSTTYPE, 'createdAt' | 'updatedAt'> {
  createdAt: string;
  updatedAt: string;
}


   export interface POSTTYPE {
    quantity? : string
    id     :  string
    content? :string | null
    title:string
    published :boolean
    price:number
    count :number
    countproduct : number
    priceOffer : number
    author? :USERTYPE
    authorId :string
    createdAt :Date
    updatedAt:Date
    productImage: PHOTO[]
    categoryList: Category[]
    review: Review[]
    tags: string[]
    // tableContent?: string; // اختیاری کردن tableContent
    tableContent:string | null
  }
  export interface Review{
    reviewText: string
    name     :  string
    email    :  string
    createdAt : Date 
    rating   :number
  }

  export interface Category{
    id: string
    category :string
  }

 export interface ADRESS {
    location: string;
    state: string;
    zipcode: string;
    id: string
    userId:string
  }


export interface CATEGORYLayout{
  id:string
  item?:CATEGORYLayoutITEM[]
  layout:string
  item2?:CATEGORYLayoutITEM[]

}

export interface CATEGORYLayoutITEM{
  id:string
  link:string
  pic:string
  title:string
  subtitle?:string
  count?:string

}
  

// /////////////////////
export interface NavItem {
  path: string;
  icon: React.ReactElement;
}

export interface AboutItem {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
}

export interface Item {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  key:string
}

export interface Contactt extends Item {
  path: string;
}

export type FooterItem = Omit<Contactt, "icon" | "subtitle">;

export interface ExperienceItem {
  titleItem: string;
  frontItem?: Item[];
  backItem?: Item[];
  
}

export interface portfolioItem {
  _id: string;
  title: string;
  pic: string;
  __v: any;
}

export interface swiperItem {
  _id: string;
  name: string;
  pic: string;
  text: string;
  __v: any;
}
