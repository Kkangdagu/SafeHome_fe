import Button from '@/components/Common/Button';
import Input from '@/components/Common/Input';

export default function CommonTestComponents() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3">
      <Button type="button" variant="primary">
        primary
      </Button>
      <Button type="button" variant="primary" disabled>
        disabled-p
      </Button>
      <Button type="submit" variant="secondary">
        samll
      </Button>
      <Input type="email" placeholder="이메일" className="border" />
      <Input type="password" placeholder="인증번호" className="border" />
      <Input
        type="password"
        placeholder="비밀번호"
        className="border-b rounded-none"
      />
      <Input
        type="password"
        placeholder="비밀번호 확인"
        className="border-b rounded-none"
      />
      <Input type="text" label="거래 금액" className="border" />
      <Input type="text" label="협의보수율" className="border" />
    </div>
  );
}
