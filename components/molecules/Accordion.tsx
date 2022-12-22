export default function FAQ(){
    return(
        
    <section id="accordion" className="container py-5 my-5">
    <div className="text-center col-8 mx-auto">
        <h2 className="justify-content-center">Ficou alguma dúvida?</h2>
        <p>Relaxa, aqui temos algumas respostas para as perguntas mais frequêntes.</p>
    </div>


    <div className="accordion col-9 mx-auto py-4" id="accordionExample">
        <div className="accordion-item">
            <h3 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Pra quem é destinado o AnimalSystem? 🌠
                </button>
            </h3>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas
                    congue quisque egestas diam in. Sit amet porttitor eget dolor morbi non arcu risus quis.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h3 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Quais as vantagens do AnimalSystem? ✨
                </button>
            </h3>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas
                    congue quisque egestas diam in. Sit amet porttitor eget dolor morbi non arcu risus quis.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h3 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Como funciona o pagamento? 💳
                </button>
            </h3>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas
                    congue quisque egestas diam in. Sit amet porttitor eget dolor morbi non arcu risus quis.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h3 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Posso cancelar quando quiser? ❌
                </button>
            </h3>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div className="accordion-body"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas
                    congue quisque egestas diam in. Sit amet porttitor eget dolor morbi non arcu risus quis.</div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center mt-4">
        <a className="ms-2 position-relative text-decoration-none" href="mailto:contato@animalsystem.com.br">Entre em contato</a>
    </div>



</section>

    );
}