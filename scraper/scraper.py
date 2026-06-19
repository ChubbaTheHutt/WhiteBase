from playwright.sync_api import sync_playwright, Playwright, Locator, Page




def card_extraction(card: Locator, page: Locator):
    print('LOG: attempting card extraction...')
    page.wait_for_load_state('domcontentloaded')
    card_name = card.locator('.cardName').inner_text()
    print(card_name)

def pagination(page: Locator):
    page_cards = page.locator('li.cardItem')
    print(page_cards.count())

    page.wait_for_load_state('domcontentloaded')
    
    visible_page_cards = page_cards.filter(visible = True)
    print(visible_page_cards.count())

    for i in range(visible_page_cards.count()):
        print('LOG: Moving to card', i, 'on page')
        visible_page_cards.nth(i).click()

        #card_extraction - pass popup element
        card_extraction(page.locator('div.cardDetailPageContent'), page)

        #close card popup
        page.locator('div.detailBg').click()

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

    
