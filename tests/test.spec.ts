import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

const baseURL = "http://localhost:5173";

test("should search city", async ({ page }) => {
  await page.goto(baseURL);
  await page.getByTestId("SearchCities").click();
  await page.getByTestId("SearchCities").fill("warszawa");
  await expect(page.getByTestId("SearchCities")).toHaveValue("warszawa");
  await page.getByTestId("SelectVoivodeshipList").click();
  await page.getByTestId("SelectVoivodeship").getByText("Mazowieckie").click();
  await page.getByTestId("SelectCity").click();
  await expect(page).toHaveURL(/.*warszawa/);
});

test("should add new city", async ({ page }) => {
  await page.goto(baseURL);
  await page.getByTestId("AddCityButton").click();
  await expect(page).toHaveURL(/.*add-city/);
  await page.getByTestId("NameInput").click();
  await page.getByTestId("NameInput").fill("Kalisz");
  await expect(page.getByTestId("NameInput")).toHaveValue("Kalisz");
  await page.getByTestId("SelectVoivodeshipList2").click();
  await page.getByTestId("SelectVoivodeshipList2").press("Enter");
  await page.getByRole("option", { name: "Małopolskie" }).press("ArrowDown");
  await page.getByRole("option", { name: "Mazowieckie" }).press("ArrowDown");
  await page
    .getByRole("option", { name: "Opolskie", exact: true })
    .press("ArrowDown");
  await page.getByRole("option", { name: "Podkarpackie" }).press("ArrowDown");
  await page.getByRole("option", { name: "Podlaskie" }).press("ArrowDown");
  await page
    .getByRole("option", { name: "Pomorskie", exact: true })
    .press("ArrowDown");
  await page
    .getByRole("option", { name: "Śląskie", exact: true })
    .press("ArrowDown");
  await page.getByRole("option", { name: "Świętokrzyskie" }).press("ArrowDown");
  await page
    .getByRole("option", { name: "Warmińsko-Mazurskie" })
    .press("ArrowDown");
  await page.getByRole("option", { name: "Wielkopolskie" }).press("Enter");
  await page.getByTestId("PictureInput").click();
  await page
    .getByTestId("PictureInput")
    .fill(
      "https://upload.wikimedia.org/wikipedia/commons/0/01/PANORAMA_Z_RATUSZOWEJ_WIE%C5%BBY_01_-_panoramio.jpg"
    );
  await expect(page.getByTestId("PictureInput")).toHaveValue(
    "https://upload.wikimedia.org/wikipedia/commons/0/01/PANORAMA_Z_RATUSZOWEJ_WIE%C5%BBY_01_-_panoramio.jpg"
  );
  await page.getByTestId("DescInput").click();
  await page
    .getByTestId("DescInput")
    .fill(
      "Kalisz (łac. Calisia, jid. ‏קאַליש‎) – miasto na prawach powiatu, drugi co do wielkości ośrodek województwa wielkopolskiego, historyczna stolica Wielkopolski[4][5], stolica Kaliskiego[6], siedziba powiatu kaliskiego, jeden z dwóch głównych ośrodków aglomeracji kalisko-ostrowskiej[7] i Kaliskiego Okręgu Przemysłowego; siedziba kurii diecezji kaliskiej. Miasto położone w środkowo-zachodniej Polsce na Wysoczyźnie Kaliskiej, nad Prosną, u ujścia Swędrni.\n\nOd 1314 do II rozbioru Polski Kalisz był stolicą województwa kaliskiego. Od XVI wieku do pierwszej połowy XVIII wieku był miejscem obrad sejmików elekcyjnych województwa kaliskiego[8]. Następnie został stolicą departamentu kaliskiego w Księstwie Warszawskim, w Królestwie Polskim stolicą województwa (do 1837), później (w latach 1837–1845 i 1867–1918) stolicą guberni. W latach 1975–1998 był stolicą województwa kaliskiego.\n\nMiasto stanowi ważny ośrodek kulturalny; znajdują się w nim teatry, muzea, filharmonia, galerie sztuki, organizowane są festiwale, m.in. Kaliskie Spotkania Teatralne (1961) i Międzynarodowy Festiwal Pianistów Jazzowych (1974)."
    );
  await expect(page.getByTestId("DescInput")).toHaveValue(
    "Kalisz (łac. Calisia, jid. ‏קאַליש‎) – miasto na prawach powiatu, drugi co do wielkości ośrodek województwa wielkopolskiego, historyczna stolica Wielkopolski[4][5], stolica Kaliskiego[6], siedziba powiatu kaliskiego, jeden z dwóch głównych ośrodków aglomeracji kalisko-ostrowskiej[7] i Kaliskiego Okręgu Przemysłowego; siedziba kurii diecezji kaliskiej. Miasto położone w środkowo-zachodniej Polsce na Wysoczyźnie Kaliskiej, nad Prosną, u ujścia Swędrni.\n\nOd 1314 do II rozbioru Polski Kalisz był stolicą województwa kaliskiego. Od XVI wieku do pierwszej połowy XVIII wieku był miejscem obrad sejmików elekcyjnych województwa kaliskiego[8]. Następnie został stolicą departamentu kaliskiego w Księstwie Warszawskim, w Królestwie Polskim stolicą województwa (do 1837), później (w latach 1837–1845 i 1867–1918) stolicą guberni. W latach 1975–1998 był stolicą województwa kaliskiego.\n\nMiasto stanowi ważny ośrodek kulturalny; znajdują się w nim teatry, muzea, filharmonia, galerie sztuki, organizowane są festiwale, m.in. Kaliskie Spotkania Teatralne (1961) i Międzynarodowy Festiwal Pianistów Jazzowych (1974)."
  );
  await page.getByTestId("LinksInput").click();
  await page
    .getByTestId("LinksInput")
    .fill("https://kalisz.pl, https://www.bip.kalisz.pl/");
  await expect(page.getByTestId("LinksInput")).toHaveValue(
    "https://kalisz.pl, https://www.bip.kalisz.pl/"
  );
  await page.getByTestId("KnownPlacesInput").click();
  await page.getByTestId("KnownPlacesInput").fill("Pałac Trybunalski, Ratusz");
  await expect(page.getByTestId("KnownPlacesInput")).toHaveValue(
    "Pałac Trybunalski, Ratusz"
  );
  await page.getByTestId("SubmitAddCityButton").click();
  await expect(page).toHaveURL(/.*Kalisz/);
});

test("should edit city", async ({ page }) => {
  await page.goto(`${baseURL}/cities/Kalisz`);
  await page.getByTestId("EditCityButton").click();
  await expect(page).toHaveURL(/.*edit/);
  await page.getByTestId("NameInput").click();
  await page.getByTestId("NameInput").fill("nowe-miasto");
  await page.getByTestId("SelectVoivodeshipList2").click();
  await page.getByRole("option", { name: "Lubuskie" }).click();
  await page.getByTestId("PictureInput").click();
  await page
    .getByTestId("PictureInput")
    .fill(
      "https://fastly.picsum.photos/id/173/600/400.jpg?hmac=ftFETwZpHOiX1KdoUNqt3fclh0rIPfd1D6M3nFC8gvM"
    );
  await expect(page.getByTestId("PictureInput")).toHaveValue(
    "https://fastly.picsum.photos/id/173/600/400.jpg?hmac=ftFETwZpHOiX1KdoUNqt3fclh0rIPfd1D6M3nFC8gvM"
  );
  await page.getByTestId("DescInput").click();
  await page
    .getByTestId("DescInput")
    .fill("To jest nowy opis który posiada minimum 25 znaków");
  await expect(page.getByTestId("DescInput")).toHaveValue(
    "To jest nowy opis który posiada minimum 25 znaków"
  );
  await page.getByTestId("LinksInput").click();
  await page
    .getByTestId("LinksInput")
    .fill("https://google.com, https://www.youtube.com");
  await expect(page.getByTestId("LinksInput")).toHaveValue(
    "https://google.com, https://www.youtube.com"
  );
  await page.getByTestId("KnownPlacesInput").click();
  await page.getByTestId("KnownPlacesInput").fill("Miejsce1, Miejsce2");
  await expect(page.getByTestId("KnownPlacesInput")).toHaveValue(
    "Miejsce1, Miejsce2"
  );
  await page.getByTestId("SubmitEditCityButton").click();
  await expect(page).toHaveURL(/.*nowe-miasto/);
});

test("should delete", async ({ page }) => {
  await page.goto(`${baseURL}/cities/nowe-miasto`);
  await page.getByTestId("DeleteCityModal").click();
  await page.getByTestId("DeleteCityButton").click();
  await expect(page.getByTestId("CitiesList")).not.toContainText("nowe-miasto");
});
