@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h1>{{ __('Dishes') }}</h1>
            <a href="/dishes/create" title="Add a dish" class="btn btn-primary mb-3">Crea un piatto</a>

            <table class="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tags</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($dishes as $key => $dish)
                        <tr>
                            <td>{{ $dish->name }}</td>
                            <td>
                            @php
                                $dish->tags->each(function ($item) {
                                    echo "<a href='#' class='badge badge-success'>$item->name</a> ";
                                })
                            @endphp
                            </td>
                            <td>
                                <a
                                    href="{{ route('dishes.edit', $dish->id) }}"
                                    title="Modifica" class="btn btn-primary"
                                >
                                    Modifica
                                </a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection
