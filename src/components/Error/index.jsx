import styled from 'styled-components'
import colors from '../../utils/style/color.js'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
  margin-top: 20px;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

function Error() {
  return (
      <ErrorWrapper>
        <ErrorTitle>Oups...</ErrorTitle>
        <ErrorSubtitle>
          Il semblerait que la page que vous cherchez n'existe pas
        </ErrorSubtitle>
      </ErrorWrapper>
  )
}

export default Error
