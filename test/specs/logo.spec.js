import { describe } from 'mocha';
import LogoPage from '../pageobjects/logoPage.page'

describe('E2E testing logo form', ()=>{  

    it('logo should be displayed and after click go to main page ',async() => {
        await LogoPage.open()
        await expect(LogoPage.leftLogo).toBeDisplayed();
        await expect(LogoPage.leftLogo).toBeClickable(); 
        await LogoPage.clickOnLeftLogo();       
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru');      
    })

    it('БГУИР link should be displayed and clickable ',async() => {        
        await expect(LogoPage.collegeName).toBeDisplayed();
        await LogoPage.clickOnCollegeName();        
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru');
    });      

    it('change page and language on click link "English"',async()  =>{              
        await expect(LogoPage.englishLanguageLink).toBeDisplayed()  
        await LogoPage.changeLanguageEnglish()
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/en');       
    })
       

    it('change page and language on click link "Русский"',async()  =>{
         
        await expect(LogoPage.russianLanguageLink).toBeDisplayed()  
        await LogoPage.changeLanguageRussian();
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru');       
    })   

    // it('should display banner first slide',async() =>{
    //     await expect (LogoPage.firstBannerPage).toBeDisplayed();
    //     await LogoPage.clickOnFirstBannerLink();
    //     await expect(LogoPage.firstBannerImage).toBeDisabled();

    // })
    it('should change page after click on second banner slide', async() =>{
        await LogoPage.clickOnSecondBannerLink();
        await expect (LogoPage.secondBannerPage).toBeDisplayed();
        await LogoPage.clickOnBannerLink();               
        await expect(browser).toHaveUrl('https://mrk-bsuir.by/ru/content/it-shkola-mrk')
        
    })


})

