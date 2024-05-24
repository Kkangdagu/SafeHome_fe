import 'cypress-file-upload';

describe('OCR 분석 페이지', () => {
  beforeEach(() => {
    // 페이지 초기화
    cy.visit('/analysis');
    cy.url().should('include', '/analysis');
    cy.contains('계약서 업로드').should('be.visible');

    // 비 로그인 상태 확인 및 처리
    cy.get('.swal2-container').should('be.visible');
    cy.contains('로그인 후 이용 가능합니다.').should('be.visible');

    // 확인 버튼 클릭하여 로그인 페이지로 이동
    cy.get('.swal2-confirm').click();
    cy.url().should('include', '/login');

    // 로그인 진행
    cy.get('#input_email').type('rudals2148@naver.com');
    cy.get('#input_password').type('!rk1sk2ek3');
    cy.get('#login_btn').should('be.enabled').click();

    // 로그인이 완료될 때까지 기다림
    cy.wait(3000);
  });

  context('로그인 상태', () => {
    it('OCR 분석 페이지에 접근할 수 있어야 한다', () => {
      // Given: 로그인 상태에서 /analysis 경로로 접근
      cy.visit('/analysis');

      // Then: 페이지가 제대로 로드되었는지 확인
      cy.url().should('include', '/analysis');
      cy.contains('계약서 업로드').should('be.visible');

      cy.fixture('testt.jpg', 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then((fileContent) => {
          // input 요소를 가져와 파일을 연결
          cy.get('#upload').attachFile(
            {
              fileContent,
              fileName: 'testt.jpg',
              mimeType: 'image/jpg',
            },
            {
              subjectType: 'input',
            },
          );
        });

      // 이미지가 업로드 되었다면 미리보기
      cy.contains('분석하기').should('be.visible');

      cy.get('#analysis').click();
      cy.wait(5000);
      cy.contains('분석 결과').should('be.visible');
    });
  });
});
