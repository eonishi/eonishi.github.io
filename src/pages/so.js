const data = "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"

export async function GET(){
    return new Response(data, {
        headers: {'Content-Type': 'text/plain'}
    });
}
