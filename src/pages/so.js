const data = "Tremendo Leak PA! \n"

// GET for my endpoint
export async function GET(){
    return new Response(data, {
        headers: {'Content-Type': 'text/plain'}
    });
}
