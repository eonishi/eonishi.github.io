const data = "Estoy probando la API"

export async function GET(){
    return new Response(data, {
        headers: {'Content-Type': 'text/plain'}
    });
}
