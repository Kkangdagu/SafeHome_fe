describe('회원가입 페이지', () => {
  it('사용자가 이메일, 인증번호를 활용해 회원가입을 한다.', () => {
    // given - 사용자가 회원가입 페이지에 접근한다.
    cy.visit('/register');
    cy.get('#email').as('email');
    cy.get('#veriCode').as('veriCode');
    cy.get('#password').as('password');
    cy.get('#passwordConfirm').as('passwordConfirm');

    // when - 사용자가 이메일, 인증번호, 비밀번호를 입력하고 다음 버튼을 누르면 2번째 회원가입 페이지로 이동한다.
    cy.get('@email').type('rudals2148@naver.com');
    cy.get('@veriCode').type('123456');
    cy.get('@password').type('!rk1sk2ek3');
    cy.get('@passwordConfirm').type('!rk1sk2ek3');

    cy.get('@email').invoke('val').should('eq', 'rudals2148@naver.com');
    cy.get('@veriCode').invoke('val').should('eq', '123456');
    cy.get('@password').invoke('val').should('eq', '!rk1sk2ek3');
    cy.get('@passwordConfirm').invoke('val').should('eq', '!rk1sk2ek3');

    cy.get('#register_next').should('exist').click();

    // when - 2번째 회원가입 페이지에서 이름, 생년월일, 전화번호를 모두 입력하고 이용약관을 체크한 후 가입하기 버튼을 클릭한다.
    cy.get('#name').type('홍길동');
    cy.get('#birthDate').type('2000-10-10');
    cy.get('#phone').type('010-1234-5678');
    cy.get('#all_agreed').should('exist').click();
    cy.get('#register_btn').should('exist').click();

    // then - 회원가입에 성공하면 로그인 화면으로 이동한다.
    cy.url().should('include', 'http://localhost:7000/login');
  });
});
