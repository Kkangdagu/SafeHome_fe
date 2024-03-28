describe('로그인 페이지', () => {
  it('사용자는 이메일과 비밀번호를 사용해 로그인을 한다.', () => {
    // given - 사용자가 로그인 화면에 접근한다
    cy.visit('/login');
    cy.get('#input_email').as('email');
    cy.get('#input_password').as('password');

    // when - 이메일과 비밀번호를 입력하고 로그인 버튼을 클릭한다
    cy.get('@email').type('rudals2148@naver.com');
    cy.get('@password').type('!rk1sk2ek3');

    cy.get('@email').invoke('val').should('eq', 'rudals2148@naver.com');
    cy.get('@password').invoke('val').should('eq', '!rk1sk2ek3');

    cy.get('#login_btn').should('exist').click();

    // then - 로그인에 성공하고 메인화면으로 이동한다
    cy.url().should('include', 'http://localhost:7000/');
  });
});
