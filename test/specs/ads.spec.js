import Page from '../pageobjects/page'
import { describe } from 'mocha';

describe('E2E testing ads form',() =>{

    beforeEach(async () => {
        await browser.url('https://www.mrk-bsuir.by/ru') //display main page
    })

    // it('should open youTube channel after click on picture-link', async() =>{
    //     // await Page.open('https://www.mrk-bsuir.by/ru');
    //     const openDoorsDayLink = $('#blockSidebar > div:nth-child(2) > p > a');
    //     await openDoorsDayLink.click();
    //     await expect(browser).toHaveUrl('https://www.youtube.com/channel/UCmTcNEiot3jUCb9KIho6rBQ/featured');
    // } );

    // it('should display game after click on image link', async() =>{
    //     const chooseSpecializationGameLink = $('#blockSidebar > div:nth-child(4) > p > a');
    //     await chooseSpecializationGameLink.click();
    //     await expect(browser).toHaveUrl('https://mrk-bsuir.by/files/upload/_game/');
    // });

    // it('should change page after click on image link', async() =>{
    //     const resourseCenterLink = $('#blockSidebar > div:nth-child(6) > p > a');
    //     await resourseCenterLink.click();
    //     await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/ru/resource-center');
    // });

    // it ('should open moodle page after click on image link', async() =>{
    //     const moodleLink = $('#blockSidebar > div:nth-child(8) > p > a');
    //     await moodleLink.click();
    //     await expect(browser).toHaveUrl('https://moodle.mrk-bsuir.by/');

    // });

    // it('should open document "Activities" after click on image link', async() =>{
    //     const activitiesLink = $('#blockSidebar > div:nth-child(10) > p > a');
    //     await activitiesLink.click();
    //     await expect(browser).toHaveUrl('https://docs.google.com/document/d/1C-myrMWtGF_daHuEEy8MTrp1396F9NOsGJHAjKWssJI/edit');        
    // });

    // it('should open pdf schedule and save it', async() =>{
    //     const scheduleTodayLink = $('#rasp');
    //     await scheduleTodayLink.click();
    //     await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/files/sr_zn_08888_09_21.pdf'); 
    //     //add save pdf
    // })
    
    // it('should open old pdf schedule and save it', async() =>{
    //     const scheduleOldLink = $('#rasp_old');
    //     await scheduleOldLink.click();
    //     await expect(browser).toHaveUrl('https://www.mrk-bsuir.by/files/vt_zn_07_09_21111122221.pdf'); 
    //     //add save pdf
    // })

    it('should display Attention text on left side', async() =>{

        const attentionText = $('#blockSidebar > div:nth-child(12) > p:nth-child(6)')
        attentionText.waitForDisplayed({timeout: 3000});
        // const text = attentionText.getText()s
        await expect (attentionText.getText()).toEqual('ВНИМАНИЕ! Перемещение и нахождение в колледже обязательно с использованием масок! Соблюдайте социальную дистанцию.')
        // console.log(text);
        // await expect(attentionText).toBeDisabled();
    })

    


    
})