const data = "Tremendo Leak PA! \n"


export async function GET(){
    return new Response(data, {
        headers: {'Content-Type': 'text/plain'}
    });
}
