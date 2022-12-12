import * as S from './styles';

// asssets
import logo from '../../assets/images/logo.svg';

export function Home() {
    return (
        <S.Container>
            <S.Logo src={logo} />
            <S.Title>Dotcoding</S.Title>
        </S.Container>
    );
}