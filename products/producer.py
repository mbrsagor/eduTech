import pika, json

params = pika.URLParameters('amqps://fkggdzym:wUFW9Knc3MJ5sb8tqRs2K4a_RypB0u5E@cattle.rmq2.cloudamqp.com/fkggdzym')
connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='main', body=json.dumps(body), properties=properties)
