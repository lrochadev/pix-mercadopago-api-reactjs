import axios from "axios";

const BASE_PATH = "http://localhost:3000";

export async function postCriarPix(body: any) {
    return await axios.post(`${BASE_PATH}/criar-pix`,
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
    const body = {
        token,
        issuer_id,
        payment_method_id,
        transaction_amount: transaction_amount,
        installments: Number(installments),
        description: "Capa para notebook",
        payer: {
            email,
            identification: {
                type: identificationType,
                number: identificationNumber,
            },
        },
    }

    return await axios.post(`${BASE_PATH}/process_payment`,
        { body }
    );
}