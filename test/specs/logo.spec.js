const { describe } = require("mocha");

describe('testing logo form', ()=>{ 

    beforeEach(async () => {
        await browser.url('https://www.mrk-bsuir.by/ru') //display main 
    })

    it('logo should be displayed and after click go to main page ',async() => {

        const logo = $('#logo-image');
        await expect(logo).toBeDisplayed();
        await expect(logo).toBeClickable();
        await logo.click();
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru');       
    
    })

    it('БГУИР link should be displayed and clickable ',async() => {

        const BSUIRlink =  $('//*[@id="logo-text"]/a');
        await expect(BSUIRlink).toBeDisplayed();
        await BSUIRlink.click();
        // console.log(expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru'));
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru');
    });  

    it('college name should be displayed',async()  =>{

        const collegeName = $('//*[@id="logo-text"]/div');        
        await expect(collegeName).toBeDisplayed()            
    })

    it('change page and language on click link "English"',async()  =>{

        const engLink = $('//*[@id="lang"]/div/ul/li[2]/a');        
        await expect(engLink).toBeDisplayed()  
        await engLink.click();
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/en');       
    })

    it('change page and language on click link "English"',async()  =>{

        const engLink = $('//*[@id="lang"]/div/ul/li[2]/a');        
        await expect(engLink).toBeDisplayed()  
        await engLink.click();
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/en');       
    })    

    it('change page and language on click link "Русский"',async()  =>{

        const ruLink = $('//*[@id="lang"]/div/ul/li[1]/a');        
        await expect(ruLink).toBeDisplayed()  
        await ruLink.click();
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru');       
    })

    it('change page and language on click image "English"',async()  =>{

        const engImage = $('//*[@id="lang"]/div/ul/li[2]/a/img');        
        await expect(engImage).toBeDisplayed()  
        await engImage.click();
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/en');       
    })

    it('change page and language on click image "Русский"',async()  =>{

        const ruImage = $('//*[@id="lang"]/div/ul/li[1]/a/img');        
        await expect(ruImage).toBeDisplayed()  
        await ruImage.click();
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru');       
    })

})

