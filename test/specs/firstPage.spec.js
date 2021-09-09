describe('testing main page in site', ()=>{

    beforeEach(async () => {
        await browser.url('https://www.mrk-bsuir.by/ru')
    })

    it ('browser has to open correct page', async () =>{
        expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru')
    });

    it('link click should change page with language', () =>{
        const engLink = $('/html/body/div[2]/div/div[1]/div/div[2]/div[2]/div/ul/li[2]/a');       
        engLink.click();
        expect (browser).toHaveUrl('https://www.mrk-bsuir.by/en');              
    });

    it('open english page',()=>{
        const ruLink = $('/html/body/div[2]/div/div[1]/div/div[2]/div[2]/div/ul/li[1]/a')
        ruLink.click();
        expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru')
    })

    it ('should open mail server', () =>{
        const mailPath = $('/html/body/div[2]/div/div[5]/div/ul/li[5]/a');
        mailPath.click();
        expect(browser).toHaveUrl('http://mail.mrk-bsuir.by/');
    })

    it ('should write login and pass in fields', async() =>{

        const login = $('input.field[name="Username"]')
        const password = $('input.field[name="Password"]')
        const submit = $('.button');
        await login.addValue('test')
        await password.addValue('1234')
        await submit.click();
        expect(browser).toHaveUrl('http://mail.mrk-bsuir.by/');        
    })    
        
})

