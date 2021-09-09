describe('testing menu ', ()=>{ 

    beforeEach(async () => {
        await browser.url('https://www.mrk-bsuir.by/ru') //display main page
    })

    it('should change page on click on link "Главная"', async () =>{

        const main = $('//*[@id="main-menu"]/div/ul/li[1]/a')
        await expect (main).toBeClickable();
        await main.click();
        await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru')
    })

    it('should change page on click on link "Главная"-> "Номативные документы" -> "Документы вышестоящих...', async () =>{
               
        const main = $('#main-menu > div > ul > li.first.expanded > a');  
        const menu = $('#main-menu > div > ul > li.first.expanded > ul');
        const menuIndex0 = $('#main-menu > div > ul > li.first.expanded > ul > li.first.expanded')
        const menuIndex0_first = $('#main-menu > div > ul > li.first.expanded > ul > li.first.expanded > ul > li.first.leaf > a')
        await main.moveTo();
        menu.waitForDisplayed({timeout: 1000});
        await menuIndex0.moveTo()
        menuIndex0_first.waitForDisplayed({timeout: 1000})
        await menuIndex0_first.click();
        await expect (browser).toHaveUrl('https://www.mrk-bsuir.by/ru/content/dokumenty-vyshestoyashchih-organizaciy')      
                   
    })

    it('should change page on click on link "Главная"-> "Система менеджмента качества"', async () =>{
               
        const main = $('#main-menu > div > ul > li.first.expanded > a');  
        const menu = $('#main-menu > div > ul > li.first.expanded > ul');
        const menegmentQualityLink = $('#main-menu > div > ul > li.first.expanded > ul > li.last.leaf > a')        
        await main.moveTo();
        menu.waitForDisplayed({timeout: 1000});        
        await menegmentQualityLink.click();
        await expect (browser).toHaveUrl('https://www.mrk-bsuir.by/ru/content/smk')                         
    })

    it('should change page on click on link "О колледже"-> "История"', async () =>{
               
        const aboutCollege = $('#main-menu > div > ul > li:nth-child(2) > a');  
        const history = $('#main-menu > div > ul > li:nth-child(2) > ul > li.first.leaf > a');                
        await aboutCollege.moveTo();
        history.waitForDisplayed({timeout: 1000});        
        await history.click();
        await expect (browser).toHaveUrl('https://www.mrk-bsuir.by/ru/content/istoriya-mrk')                         
    })

    it('should change page on click on link "О колледже"-> "Структура колледжа"', async () =>{
               
        const aboutCollege = $('#main-menu > div > ul > li:nth-child(2) > a');  
        const structureOfCollege = $('#main-menu > div > ul > li:nth-child(2) > ul > li:nth-child(2) > a');                
        await aboutCollege.moveTo();
        structureOfCollege.waitForDisplayed({timeout: 1000});        
        await structureOfCollege.click();
        await expect (browser).toHaveUrl('https://www.mrk-bsuir.by/ru/content/struktura')                         
    })
    it('should change page on click on link "О колледже"-> "Структурные подразделения" -> "Методисты"', async () =>{
               
        const aboutCollege = $('#main-menu > div > ul > li:nth-child(2) > a');  
        const structure = $('#main-menu > div > ul > li:nth-child(2) > ul > li:nth-child(3) > a'); 
        const metodists = $('#main-menu > div > ul > li:nth-child(2) > ul > li:nth-child(3) > ul > li.first.leaf > a')               
        await aboutCollege.moveTo();
        structure.waitForDisplayed({timeout: 1000});        
        await structure.moveTo();
        metodists.waitForDisplayed({timeout:1000});
        await metodists.click();
        await expect (browser).toHaveUrl('https://www.mrk-bsuir.by/ru/content/uchebno-metodicheskiy-otdel')                         
    })
    it('should change page on click on link "О колледже"-> "Структурные подразделения" -> "Методисты"', async () =>{
               
        const aboutCollege = $('#main-menu > div > ul > li:nth-child(2) > a');  
        const structure = $('#main-menu > div > ul > li:nth-child(2) > ul > li:nth-child(3) > a'); 
        const metodists = $('#main-menu > div > ul > li:nth-child(2) > ul > li:nth-child(3) > ul > li.first.leaf > a')               
        await aboutCollege.moveTo();
        structure.waitForDisplayed({timeout: 1000});        
        await structure.moveTo();
        metodists.waitForDisplayed({timeout:1000});
        await metodists.click();
        await expect (browser).toHaveUrl('https://www.mrk-bsuir.by/ru/content/uchebno-metodicheskiy-otdel')                         
    })
    



})