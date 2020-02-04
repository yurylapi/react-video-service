describe('The Home Page', () => {
    const resultItemClass = '.results-item__results-item';
    const sortingBtnClass = '.sort-option__button';
    const singleItemTitleClass = '.film-title__title';
    const resultSameGenreHeader = '.results-same-genre__results-heading';

    beforeEach(() => {
        cy.visit('/');
    });

    it('successfully loads', () => {
        cy.contains('NetflixRoulette');
        cy.contains('6 movies found');
        cy.contains('Ready Player One');
    });

    it('filters results by changing the search input', () => {
        cy.get(resultItemClass).should('have.length', 6);
        cy.get('input[type="text"]').type('fifty shades');
        cy.get(resultItemClass).should('have.length', 1);
    });

    it('sorts results by changing the sorting criteria', () => {
        cy.get(resultItemClass).first().contains('Ready Player One');
        cy.get(sortingBtnClass).last().click();
        cy.get(resultItemClass).eq(1).contains('Coco');
    });

    it('open single item and see a title and see more similar films', () => {
        cy.get(resultItemClass).first().click();
        cy.get(singleItemTitleClass).first().contains('Ready Player One');
        cy.get(resultSameGenreHeader).first().contains('Adventure, Science Fiction, Action');
        cy.get(resultItemClass).should('have.length', 2);
    });
});
