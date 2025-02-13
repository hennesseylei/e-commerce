from flask import Flask, render_template, request, redirect
import psycopg2

app = Flask(__name__)

# Database connection string
connection_str = "dbname=postgres user=postgres password=28460 options='-c search_path=ecommercegirl'"

# Checkout route to handle form submission
@app.route("/checkout", methods=["GET", "POST"])
def checkout():
    if request.method == "POST":
        # Collect form data
        first_name = request.form['firstname']
        email = request.form['email']
        address = request.form['address']
        city = request.form['city']
        state = request.form['state']
        zip_code = request.form['zip']
        card_name = request.form['cardname']
        card_number = request.form['cardnumber']
        exp_month = request.form['expmonth']
        exp_year = request.form['expyear']
        cvv = request.form['cvv']

        
        shipping_address = address if 'sameadr' in request.form else request.form.get('shipping_address', '')
        # Insert the collected data into your database (for example, in orders table)
        connection = psycopg2.connect(connection_str)
        cursor = connection.cursor()

        cursor.execute("""
            INSERT INTO orders (ofname, oplace, mobile, dstatus)
            VALUES (%s, %s, %s, %s)
        """, (first_name, address, '1234567890', 'Pending'))

        # Commit the transaction and close the connection
        connection.commit()
        cursor.close()
        connection.close()

        # Redirect to a confirmation page or display a success message
        return redirect("/order_success")

    return render_template("checkout.html")


# Success route to confirm the order
@app.route("/order_success")
def order_success():
    return "Your order has been successfully placed!"


# ---------------------------------------------
# Admin Routes
# ---------------------------------------------

@app.route('/admin', methods=['GET'])
def get_admin():
    connection = psycopg2.connect(connection_str)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM admin;')
    admin = cursor.fetchall()
    cursor.close()
    connection.close()
    return render_template('admin.html', data=admin)

# ---------------------------------------------
# Orders Routes
# ---------------------------------------------

@app.route('/orders', methods=['GET'])
def get_orders():
    connection = psycopg2.connect(connection_str)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM orders;')
    orders = cursor.fetchall()
    cursor.close()
    connection.close()
    return render_template('orders.html', data=orders)

# ---------------------------------------------
# Users Routes
# ---------------------------------------------

@app.route('/users', methods=['GET'])
def get_users():
    connection = psycopg2.connect(connection_str)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM users;')
    users = cursor.fetchall()
    cursor.close()
    connection.close()
    return render_template('users.html', data=users)

# ---------------------------------------------
# Main
# ---------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)
