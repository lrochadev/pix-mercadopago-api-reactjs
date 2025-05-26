import axios from "axios";

const BASE_PATH = "http://localhost:8080";

export async function postCriarPix(body: any) {
    return await axios.post(`${BASE_PATH}/api/payments`,
        { body }
    )
}

export async function postCredit(
    token: string,
    issuer_id: string,
    payment_method_id: string,
    transaction_amount: number,
    installments: number,
    email: string,
    identificationType: string,
    identificationNumber: string
) {
    return await axios.post(`${BASE_PATH}/api/payments`,
        {
        token,
        issuer_id,
        payment_method_id,
        transaction_amount: transaction_amount,
        installments: Number(installments),
        description: "Capa para notebook",
        contribuicao: {
            user: {
                email,
                identification: {
                    type: identificationType,
                    number: identificationNumber,
                },
            }
        },
    }
    );
}