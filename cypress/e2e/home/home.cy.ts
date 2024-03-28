describe('메인화면의 온보딩, 정책레터, 최신 정책 데이터 호출', () => {
  it('메인화면에 접근하면 온보딩 데이터를 불러온다.', () => {
    // given - 사용자가 메인화면에 접근한다.
    cy.visit('/');
    cy.get('#onboarding').as('onboarding');

    // when - 온보딩 데이터를 요청한다.
    cy.request('https://sulbin-api.store/re/real-estate-notice/selectAll').as(
      'onboardingResult',
    );

    // then - 온보딩 데이터가 보여진다.
    cy.get('@onboardingResult').should('have.property', 'status', 200);
    cy.get('@onboardingResult')
      .should('have.property', 'body')
      .and('not.be.empty');
  });

  it('메인화면에 접근하면 정책 레터 데이터를 불러온다.', () => {
    // given - 사용자가 메인화면에 접근한다.
    cy.visit('/');
    cy.get('#policy-letter').as('policy-letter');

    // when - 정책 레터 데이터를 요청한다.
    cy.request(
      'https://sulbin-api.store/re/real-estate-policy-letter/selectAll',
    ).as('letterResult');

    // then - 정책 레터 데이터가 보여진다.
    cy.get('@letterResult').should('have.property', 'status', 200);
    cy.get('@letterResult').should('have.property', 'body').and('not.be.empty');
  });

  it('메인화면에 접근하면 최신 정책 데이터를 불러온다.', () => {
    // given - 사용자가 메인화면에 접근한다.
    cy.visit('/');
    cy.get('#latest-policy').as('latest-policy');

    // when - 최신정책 데이터를 요청한다.
    cy.request(
      'https://sulbin-api.store/re/real-estate-latest-policy/selectPaging?page=1',
    ).as('latestPolicy');

    // then - 최신정책 데이터가 보여진다.
    cy.get('@latestPolicy').should('have.property', 'status', 200);
    cy.get('@latestPolicy').should('have.property', 'body').and('not.be.empty');
  });
});
