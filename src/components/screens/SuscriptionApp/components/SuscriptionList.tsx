import { Suscription } from 'src/@types/Suscription'
import EmptySuscriptionList from './EmptySuscriptionList'
import SuscriptionItem from './SuscriptionItem'

interface Props {
  suscriptions?: Suscription[]
  onSuscriptionRemove: () => void
}

export default function SuscriptionList({
  suscriptions, onSuscriptionRemove }: Props) {
  return (
    <section className="my-4">
      <h2 className="text-2xl mb-2">
        Mis cuentas de Streaming
      </h2>
      {!suscriptions?.length ? (
        <EmptySuscriptionList />
      ) : (
        <ul className="space-y-2">
          {suscriptions.map(suscription => (
            <SuscriptionItem
              key={suscription.id}
              id={suscription.id}
              name={suscription.name}
              description={suscription.description}
              datePayment={suscription.datePayment}
              image={suscription.image}
              amount={suscription.amount}
              onRemove={onSuscriptionRemove}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
