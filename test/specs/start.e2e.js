describe('Primeiro teste', () => {
    it('acessar o meu forms', async() => {
        await $('~Forms').click()
        await $('~text-input').setValue('teste')
        expect(await $('~text-input')).toBeDisplayed()
        await $('//android.view.ViewGroup[@content-desc="Dropdown"]').click()
        expect(await $('~/hierarchy/android.widget.FrameLayout')).toBeDisplayed()
        await $('//android.widget.CheckedTextView[3]').click()
        expect(await $('~button-Active')).toBeDisplayed()
        await $('android.widget.TextView').click()
        expect(await $('/hierarchy/android.widget.FrameLayout')).toBeDisplayed()
        await $('//android.widget.Button[3]').click()
        
    });
});