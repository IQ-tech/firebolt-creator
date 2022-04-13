import ErrorIcon from '@/components/common/icons/errorIcon'
import * as S from './styles'

interface IError {
	message: string;
}

function Error ({ message } : IError) {
	return (
		<div  css={S.errorContainerStyle}>
			<div css={S.errorIconStyle}>
				<ErrorIcon />
			</div>
			<p css={S.errorMessageStyle}>{message}</p>
		</div>
	)
}
export default Error