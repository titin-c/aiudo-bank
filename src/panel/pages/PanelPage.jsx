
import useToggle from "../../hooks/useToogle";
import { PanelLayout } from "../layout/PanelLayout";
import { CgMoreVerticalAlt, CgMoreAlt } from "react-icons/cg";
import { FilaCuenta } from "../components/FilaCuenta";

export const PanelPage = () => {
  const { toggled, setToggle } = useToggle(false);
  return (
    <PanelLayout>


      <main className="panel_main">
        <section>
          <h2 className="display-4 title">Cuentas</h2>
          
          <FilaCuenta />
          

        </section>
        <section>
          <h2 className="display-4 title">Prestamos</h2>
          
          <div className="cuenta">
            <div className="cuenta_card">
              <div className="cuenta_card-left">
                <div className="cuenta_card-top">
                  <div className="cuenta_card-top-nombre">Nombre del préstamo</div>
                  <div className="cuenta_card-top-total"><span>-90.000€</span></div>
                </div>

                <div className="cuenta_card-detalle">AB12 1234 1234 12 1234567890</div>



              </div>
              

            </div>
            
          </div>
        </section>


      </main>


    </PanelLayout>

  )
}
