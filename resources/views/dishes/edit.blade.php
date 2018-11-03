@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h1>{{ __('Edit dish') }}</h1>

            @if ($errors->any())
            <div class="alert alert-danger">
                <strong>Whoops!</strong> There were some problems with your input.<br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif

            <form action="{{ route('dishes.update', $dish->id) }}" method="post">
                @csrf
                @method('PUT')
                <div class="form-group">
                    <label for="name">Nome</label>
                    <input type="text" name="name" class="form-control" placeholder="name" value="{{ $dish->name }}" />
                </div>

                <fieldset>
                    <legend>Tags</legend>
                    <div class="row">
                    @foreach($tags as $tag)

                        @php
                        $checked = '';
                        foreach($dish->tags as $dishTag) {
                            if($dishTag->id === $tag->id)
                                $checked = 'checked';
                        }
                        @endphp

                        <div class="col-3">
                            <label for="tag_{{ $tag->id }}">
                                <input
                                    type="checkbox"
                                    name="tags[]"
                                    id="tag_{{ $tag->id }}"
                                    value="{{ $tag->id }}"
                                    {{ $checked }}
                                /> {{ $tag->name }}
                            </label>
                        </div>
                    @endforeach
                    </div>
                </fieldset>

                <div class="form-group mt-4">
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
            </from>
        </div>
    </div>
</div>
@endsection
