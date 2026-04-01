export async function onRequestPost(context) {
    const form = await context.request.formData();
    const name = form.get("name");
    const registered_by = form.get("registered_by");

    const db = context.env.DB; // D1 binding

    await db.prepare(
        "INSERT INTO registrations (name, registered_by) VALUES (?, ?)"
    ).bind(name, registered_by).run();

    return new Response("Registration successful!");
}
