import asyncio
from playwright.async_api import async_playwright

async def verify_ussd_sync():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        try:
            await page.goto('http://localhost:3000')
        except Exception:
            print("Server not running")
            return

        # Click SWAHILI
        swahili_btn = page.get_by_role('button', name='SWAHILI REGIONAL STANDARD')
        await swahili_btn.click()

        # Verify Swahili items
        await page.locator('li:has-text("1. Bei za Soko")').wait_for()
        print("Verified Swahili items are present")

        # Click LUO
        luo_btn = page.get_by_role('button', name='LUO NORTHERN REGION DIALECT')
        await luo_btn.click()

        # Wait for Luo header and items
        await page.locator('p:has-text("MENYU MADIT ME AGRI-PULSE")').wait_for()
        await page.locator('li:has-text("1. Wel tic")').wait_for()
        print("Verified Luo header and items are present")

        # Take screenshot of the whole page
        await page.screenshot(path='verification/final_verified.png', full_page=True)
        print("Screenshot saved to verification/final_verified.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_ussd_sync())
