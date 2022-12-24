
import { PanelLayout } from "../layout/PanelLayout";
import { FilaCuenta } from "../components/FilaCuenta";
import { FilaPrestamo } from "../components/FilaPrestamo";

export const PanelPage = () => {
  return (
    <PanelLayout>
      <main className="panel_main">
        <section>
          <h2 className="display-4 title">Cuentas</h2>
          <FilaCuenta />
        </section>
        <section>
          <h2 className="display-4 title">Prestamos</h2>
          <FilaPrestamo />
        </section>
      </main>
    </PanelLayout>

  )
}
