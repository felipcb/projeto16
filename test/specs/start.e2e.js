describe('Primeiro teste', () => {
    it('acessar o meu forms', async() => {
        await $('~Forms').click()
        await $('~text-input').setValue('teste')
        expect(await $('~text-input')).toBeDisplayed()
        await $('//android.view.ViewGroup[@content-desc="Dropdown"]').click()
        expect(await $('~/hierarchy/android.widget.FrameLayout')).toBeDisplayed()
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]').click()
        
    });
});