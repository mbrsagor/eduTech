import pika
import sys

params = pika.URLParameters('amqps://fkggdzym:wUFW9Knc3MJ5sb8tqRs2K4a_RypB0u5E@cattle.rmq2.cloudamqp.com/fkggdzym')
connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish():
    message = ' '.join(sys.argv[1:]) or "Hello World!"
    channel.basic_publish(exchange='', routing_key='admin', body="Hello there")
