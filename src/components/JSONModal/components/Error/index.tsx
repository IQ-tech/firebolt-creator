import ErrorIcon from '@/components/common/icons/errorIcon'
import { errorContainerStyle, errorIconStyle, errorMessageStyle } from '../../styles'

interface IError {
	message: string;
}

function Error ({ message } : IError) {
	return (
		<div  css={errorContainerStyle}>
			<div css={errorIconStyle}>
				<ErrorIcon />
			</div>
			<p css={errorMessageStyle}>{message}</p>
		</div>
	)
}
export default Error