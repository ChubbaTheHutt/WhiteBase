from playwright.sync_api import sync_playwright, Playwright, Locator, Page, Frame

def card_extraction(card_frame : Frame):
    print('LOG: attempting card extraction...')
    
    card_name = card_frame.locator('.cardName')
    print(card_name.inner_text())

    card_rarity = card_frame.locator('.rarity')
    card_id = card_frame.locator('.cardNo')

    data = f'''card_id: {card_id},
    card_name: {card_name},
    rarity: {card_rarity}'''
    

    #in the gcg website, there are
    #11 divs with classname dataTit (label) and 12 divs with dataTxt (value)
    #These are not labeled uniquely so we must manually manage each one during extraction
    #The 12th dataTxt is wrapped in .overview div, thus we can separate that from the others.
    

def pagination(page: Locator):
    page_cards = page.locator('li.cardItem')
    print(page_cards.count())

    #page.wait_for_load_state('domcontentloaded')
    
    visible_page_cards = page_cards.filter(visible = True)
    print(visible_page_cards.count())

    for i in range(visible_page_cards.count()):
        print('LOG: Moving to card', i, 'on page')
        visible_page_cards.nth(i).click()

        #card_extraction - pass popup element
        card_frame = page.frame_locator('iframe.fancybox-iframe')
        print('Card popup handle:', card_frame)
        card_extraction(card_frame)

        #close card popup
        page.locator('.fancybox-button--close').click()

def run(playwright: Playwright):
    start_url = "https://www.gundam-gcg.com/en/cards/index.php"
    chrome = playwright.chromium
    browser = chrome.launch(headless=False)
    page = browser.new_page()
    page.goto(start_url)

    sets_list = page.locator(".filterList.js-toggle--01").locator("a.js-selectBtn-package").filter(has_not_text='ALL')
    drop_down = page.locator('a[data-toggleelem="js-toggle--01"]')

    print(sets_list)
    print(sets_list.count())

    for i in range(sets_list.count()):
        
        
        #change filters
        page.wait_for_load_state('domcontentloaded')
        drop_down.click(timeout=5000)
        sets_list.nth(i).click()

        pagination(page)

        #DOM updates, go extract cards
        #pagination function?
        #card cycling function?
        #card extraction function?
        
        print(sets_list.nth(i).inner_text())
        

with sync_playwright() as pw:
    run(pw)

    
