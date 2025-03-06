import 'cypress-xpath';

describe('Wingz Login Test', () => {
  beforeEach(() => {
    cy.visit('https://auth.wingz.me/auth/signin');
  });

  it('Should enter email and password using XPath', () => {
    // Enter email
    cy.xpath('//div[@class="form-group icon bordered stacked"]//input[@id="username"]')
      .type('tester@wingz.com');

    // Enter password
    cy.xpath('//div[@class="form-group icon bordered stacked"]//input[@id="password"]')
      .type('TestAccount123', { log: false }); // Hides password in Cypress logs

    // Click the Sign In button
    cy.xpath('//button[@type="submit" and contains(@class, "btn-primary") and contains(text(), "Sign In")]')
    .click();

    // Validate redirection
    cy.url().should('eq', 'https://app.wingz.me/book');

    cy.xpath('//li[a[@href="/account/favorite-drivers"]]/a')
    .filter(':visible')
    .click();
  
    cy.url().should('eq', 'https://app.wingz.me/account/favorite-drivers');

    cy.xpath('//li/a[@href="/account/profile"]')
    .should('be.visible')
    .click();
  
    cy.url().should('eq', 'https://app.wingz.me/account/profile');

    cy.xpath('//input[@type="radio" and @value="M"]').then(($male) => {
      if ($male.is(':checked')) {
        // If Male is selected, switch to Female
        cy.xpath('//input[@type="radio" and @value="F"]').check({ force: true });
      } else {
        // If Female is selected, switch to Male
        cy.xpath('//input[@type="radio" and @value="M"]').check({ force: true });
      }
    });

    // Generate random first and last names
    const firstNames = ["John", "Alice", "Michael", "Sophia", "David", "Emma"];
    const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Davis"];
    const bioTexts = [
      "Love traveling and meeting new people!",
      "Passionate about technology and innovation.",
      "Enjoys outdoor adventures and road trips.",
      "Avid reader and coffee enthusiast.",
      "Loves exploring different cultures and cuisines."
    ];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomBio = bioTexts[Math.floor(Math.random() * bioTexts.length)];

    // Fill out the first name field
    cy.xpath('//input[@name="firstName"]')
      .should('be.visible')
      .clear()
      .type(randomFirstName);

    // Fill out the last name field
    cy.xpath('//input[@name="lastName"]')
      .should('be.visible')
      .clear()
      .type(randomLastName);

    // Fill out the location field (without pressing Enter)
    cy.xpath('//input[@name="location"]')
      .should('be.visible')
      .clear()
      .type("New York"); // Modify or randomize as needed

    // Fill out the bio field
    cy.xpath('//textarea[@name="bio"]')
      .should('be.visible')
      .clear()
      .type(randomBio);

    cy.xpath('//button[@type="submit" and contains(text(), "Save")]')
      .should('be.visible')
      .click();
      
  });
});