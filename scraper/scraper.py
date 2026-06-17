from playwright.sync_api import sync_playwright, Playwright


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
        sets_list = page.locator(".filterList.js-toggle--01").locator("a.js-selectBtn-package").filter(has_not_text='ALL')
        
        drop_down.click(timeout=5000)
        sets_list.nth(i).click()
        print(sets_list.nth(i).inner_text())
        

        
with sync_playwright() as pw:
    run(pw)

    
