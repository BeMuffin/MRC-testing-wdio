// const Page = require('./page.js');
import Page from './page.js'

class LogoPage extends Page{

    get leftLogo(){
        return $('#logo-image')
    }
    get collegeName(){
        return $('#logo-text > a')
    }
    get russianLanguageLink(){
        return $('#lang > div > ul > li.ru.first > a')
    }
    get englishLanguageLink(){
        return $('#lang > div > ul > li.en.last> a')
    }
    get firstBannerPage(){
        return $('li.year >a ') //      
    }
    get firstBannerImage(){
       return $('#campaigns > li.year') 
    }    
    get secondBannerPage(){
        return $('#indicator > li.itschool > a') // itschool
    }
    get secondBannerImage(){
       return $('#campaigns > li.itschool > a') 
        
    }
    get thirdBannerPage(){
        return $('#indicator > li.my > a') // about Us
    }
    get thirdBannerImage(){
        return $('#campaigns > li.my')
    }

    clickOnLeftLogo(){
        this.leftLogo.click();
    }

    clickOnCollegeName(){
        this.collegeName.click();
    }

    changeLanguageEnglish(){
        this.englishLanguageLink.click();
    }

    changeLanguageRussian(){
        this.russianLanguageLink.click();
    }
    clickOnSecondBannerLink(){
        this.secondBannerPage.click();
    }
    clickOnFirstBannerLink(){
        this.firstBannerPage.click();

    }
    clickOnThirdBannerLink(){


    }
    clickOnBannerLink(){
        this.secondBannerImage.click()
        this.secondBannerImage.waitForDisplayed({timeout: 3000})
    }

    async open (){
        super.open('/')
    }



}

export default new LogoPage();