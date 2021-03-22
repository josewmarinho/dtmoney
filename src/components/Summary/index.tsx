import { Container } from './styles'

export function Summary() {
   <Container>
      <div>
         <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas"/>
         </header>
         <strong>R$1000,00</strong>
      </div>
      <div>
         <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="Saidas"/>
         </header>
         <strong>R$500,00</strong>
      </div>
      <div>
         <header>
            <p>Entradas</p>
            <img src={totalImg} alt="Total"/>
         </header>
         <strong>R$500,00</strong>
      </div>
   </Container>
}